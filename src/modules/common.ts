import { getCollection } from "astro:content";

import type { CollectionEntry, CollectionKey } from "astro:content";

interface BaseEntryData {
    publishDate: Date;
    updatedDate?: Date;
    draft: boolean;
}

/*-------------------------------- all entries ------------------------------*/

export interface GetAllEntriesOptions {
    skipSort?: boolean;
    includeDrafts?: boolean;
}

/**
 * Sorts by publishDate desc by default. Newest on top.
 * Omits drafts by default - set by PREVIEW_MODE env var.
 *
 * ONLY place to filter draft posts and projects.
 */
export const getAllEntries = async <T extends CollectionKey>(
    collectionName: T,
    options?: GetAllEntriesOptions,
): Promise<CollectionEntry<T>[]> => {
    if (collectionName === "imageMetadata") {
        throw new Error("imageMetadata collection cannot be sorted by date");
    }

    const { skipSort = false, includeDrafts = false } = options ?? {};

    const entries = await getCollection<T>(collectionName, ({ data }) => {
        const isProdAndDraft =
            import.meta.env.PROD && (data as BaseEntryData).draft;
        return !isProdAndDraft || includeDrafts;
    });

    if (skipSort) return entries;

    const sortedEntries = sortEntriesByDateDesc(entries);
    return sortedEntries;
};

/*-------------------------- sort by updatedDate or publishDate ------------------------*/

// just for sorting
export const getEntryLastDate = <T extends CollectionKey>(
    entry: CollectionEntry<T>,
): Date => {
    if (entry.collection === "imageMetadata") {
        throw new Error("imageMetadata entries do not have dates");
    }
    const data = entry.data as BaseEntryData;
    return data.updatedDate ?? data.publishDate;
};

export const sortEntriesByDateDesc = <T extends CollectionKey>(
    entries: CollectionEntry<T>[],
) => {
    if (entries[0]?.collection === "imageMetadata") {
        throw new Error("imageMetadata entries cannot be sorted by date");
    }
    return entries
        .slice()
        .sort(
            (a, b) =>
                getEntryLastDate(b).valueOf() - getEntryLastDate(a).valueOf(),
        );
};

/*------------------------- lastAccessDate for components -----------------------*/

export interface EntryDates {
    publishDate: Date;
    updatedDate?: Date;
}
export interface EntryDatesResult {
    lastAccessDate: Date;
    isUpdatedDate: boolean;
}

export const getPublishedOrUpdatedDate = ({
    publishDate,
    updatedDate,
}: EntryDates): EntryDatesResult => {
    const result = {
        lastAccessDate: updatedDate ?? publishDate,
        isUpdatedDate: Boolean(updatedDate),
    };

    return result;
};
