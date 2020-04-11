import React from "react";
import {
  Aside,
  List,
  ItemList,
  Link,
  WrapperBlockFriends,
  TitleFriendBlock,
  ListFriends,
} from "./StyledNavBar";
import ItemFriends from "./ItemFriends/ItemFriends";

const listFriends = [
  {
    id: 0,
    name: "Ira",
    avatar:
      "https://www.tubefilter.com/wp-content/uploads/2018/07/merrell-twins.jpg",
  },
  {
    id: 2,
    name: "Sveta",
    avatar:
      "https://images.squarespace-cdn.com/content/v1/5bca08eab10f255d8ddffa0c/1539969883533-AXE52F6XD44EQ0PBVQEW/ke17ZwdGBToddI8pDm48kAVtGBQ2dtWARVAgOJG9qAV7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UdvlR4igkZ5u0SastnIV5rI4ATu8bxd23wVGOLo0k21NrGfQ_BquvEw4Erm5TfY2-g/TI081718_190.jpg?format=1500w",
  },
  {
    id: 3,
    name: "Anya",
    avatar:
      "https://cdn.shopify.com/s/files/1/0030/5541/9507/files/TrueIMG_About_Us-4.jpg",
  },
];

const Navbar = () => {
  return (
    <Aside>
      <List>
        <ItemList>
          <Link to="/profile">Profile</Link>
        </ItemList>
        <ItemList>
          <Link to="/dialogs">Messages</Link>
        </ItemList>
        <ItemList>
          <Link to="/news">News</Link>
        </ItemList>
        <ItemList>
          <Link to="/music">Music</Link>
        </ItemList>
        <ItemList>
          <Link to="/settings">Settings</Link>
        </ItemList>
        <ItemList>
          <Link to="/find_users">Find users</Link>
        </ItemList>
      </List>

      <WrapperBlockFriends>
        <Link to="/friends">
          <TitleFriendBlock>Friends</TitleFriendBlock>
        </Link>
        <ListFriends>
          {listFriends.map((item) => (
            <ItemFriends key={item.id} avatar={item.avatar} name={item.name} />
          ))}
        </ListFriends>
      </WrapperBlockFriends>
    </Aside>
  );
};

export default Navbar;
