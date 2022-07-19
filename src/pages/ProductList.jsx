import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Product from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router";
import { useState } from "react";
import { ListItem } from "@material-ui/core";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>FILTER ITEMS</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>TYPE</Option>
            <Option>HOT</Option>
            <Option>BLACK</Option>
            <Option>COLD</Option>
            {/* <Option>BLUE</Option> */}
            {/* <Option>YELLOW</Option> */}
            {/* <Option>GREEN</Option> */}
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>SIZE</Option>
            <Option>LARGE</Option>
            <Option>MEDUIM</Option>
            <Option>SMALL</Option>
            <Option>EXTRA LARGE</Option>
            {/* <Option>XL</Option> */}
          </Select>
        </Filter>
        <Filter>
          <FilterText>SORT ITEMS</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">NEWEST</Option>
            <Option value="asc">PRICE (LOW TO HIGH)</Option>
            <Option value="desc">PRICE (HIGH TO LOW)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Product />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
