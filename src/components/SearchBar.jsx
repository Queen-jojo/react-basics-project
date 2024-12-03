import { Input } from "@chakra-ui/react";

export const SearchBar = ({ onSearch }) => {
  const handleSearch = (event) => {
    console.log("event:", event);
    const query = event.target.value;
    onSearch(query);
  };

  return (
    <Input
      type="text"
      placeholder="Search recipes..."
      onChange={handleSearch}
    />
  );
};
