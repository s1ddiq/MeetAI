import { parseAsInteger, parseAsString, useQueryState } from "nuqs";

export const useAgentsFilters = () => {
  const [search, setSearch] = useQueryState(
    "search",
    parseAsString.withDefault("").withOptions({ clearOnDefault: true })
  );
  const [page, setPage] = useQueryState(
    "page",
    parseAsInteger.withDefault(1).withOptions({ clearOnDefault: true })
  );
  return { search, setSearch, page, setPage };
};
