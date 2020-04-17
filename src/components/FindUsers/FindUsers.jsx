import React from "react";
import User from "./User/User";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  Input,
  MainWrapper,
  Search,
  WrapperSearch,
  WrapperUsers,
  WrapperPagination,
} from "./StyledFindUsersContainer";
import Pagination from "../common/Pagination/Pagination";

// let usersData = [
//   {
//     id: 1,
//     followed: true,
//     name: "Nastya",
//     status: "I am boring",
//     country: "USA",
//     city: "Kyiv",
//     img: "https://www.hyperlinkcode.com/images/hcImageHyperlink.jpg"
//   },
//   {
//     id: 2,
//     followed: false,
//     name: "Adrey",
//     status: "I am boring",
//     country: "Ukraine",
//     city: "Poltava",
//     img: "https://www.tradeinn.com/img/trekkinn-home.jpg"
//   },
//   {
//     id: 3,
//     followed: false,
//     name: "Max",
//     status: "relax...",
//     country: "China",
//     city: "Tokio",
//     img: "https://www.tradeinn.com/img/trekkinn-home.jpg"
//   },
//   {
//     id: 4,
//     followed: true,
//     name: "Ivan",
//     status: "Never give up",
//     country: "Japan",
//     city: "Muran",
//     img:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYp--hjMa4O5B1fhHDcJc7omuUFEUdP_OSUlwIXkNL0KH5cOcn"
//   },
//   {
//     id: 5,
//     followed: false,
//     name: "Danil",
//     status: "do it",
//     country: "USA",
//     city: "New york",
//     img: "https://www.egliseschilo.org/img/007.jpg"
//   },
//   {
//     id: 6,
//     followed: true,
//     name: "Shasha",
//     status: "time relax",
//     country: "USA",
//     city: "San francisko",
//     img: "https://hunyadi.info.hu/levente/images/stories/boxplus/image3.jpg"
//   }
// ];
class FindUsers extends React.Component {
  render() {
    const {
      usersData,
      currentPage,
      totalUsers,
      usersCountOnPage,
      toggleFollowing,
      setCurrentPage,
    } = this.props;

    return (
      <MainWrapper>
        <Search>
          <label>Users</label>
          <WrapperSearch>
            <Input type="text" />
            <div>
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </WrapperSearch>
        </Search>

        <WrapperUsers>
          {usersData.map((user) => (
            <User
              key={user.id}
              user={user}
              toggleFollowing={toggleFollowing}
              InFollowingProcess={this.props.inFollowingProcess.includes(
                user.id
              )}
            />
          ))}
        </WrapperUsers>
        <WrapperPagination>
          <div>
            <Pagination
              totalUsers={totalUsers}
              usersCountOnPage={usersCountOnPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </WrapperPagination>
      </MainWrapper>
    );
  }
}

export default React.memo(FindUsers);
