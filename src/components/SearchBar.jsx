import {
  Input,
  InputGroup,
  InputLeftElement,
  SearchIcon,
} from "@chakra-ui/react";

export const SearchBar = ({ onSearch }) => {
  const handleSearch = (event) => {
    const query = event.target.value;
    onSearch(query);
  };

  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="gray.300" />
      </InputLeftElement>
      <Input
        type="text"
        placeholder="Search recipes..."
        onChange={handleSearch}
      />
    </InputGroup>
  );
};
