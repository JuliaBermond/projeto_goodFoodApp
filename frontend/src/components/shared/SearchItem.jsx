import { Input } from "@chakra-ui/react";

const SearchItem = ({ searchTerm, setSearchTerm, placeholder }) => {
  return (
    <Input
      placeholder={placeholder}
      size="lg"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchItem;

