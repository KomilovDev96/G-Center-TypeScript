import Search from "antd/lib/input/Search";
import t from "translate";
import { convertPxToRem } from "utils";

function SearchForm() {
  return (
    <Search
      placeholder={t("Search...")}
      onSearch={() => {}}
      style={{ width: convertPxToRem(200) }}
      allowClear={true}
    />
  );
}

export default SearchForm;
