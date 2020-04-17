import React from "react";
import { connect } from "react-redux";
import FindUsers from "./FindUsers";
import {
  getOutInFollowingProcess,
  getUsers,
  setInFollowingProcess,
  toggleFollowing,
  getDataCurrentPage,
  getDataUser,
  getDataInFollowingProgress,
  getDataTotalUsers,
  getDataUsersCountOnPage,
  getDataIsPrelouder,
} from "../../redux/reducerUsersFind";
import Preloader from "../common/preloader/Preloader";
import { compose } from "redux";
import withAuthReducer from "../../hoc/withAuthReducer";

export class FindUsersAPI extends React.Component {
  constructor(props) {
    super(props);
    this.setCurrentPage = this.setCurrentPage.bind(this);
  }

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.usersCountOnPage);
  }

  setCurrentPage(page) {
    this.props.getUsers(page, this.props.usersCountOnPage);
  }

  render() {
    return (
      <>
        {this.props.isPreloader ? <Preloader /> : ""}
        <FindUsers
          toggleFollowing={this.props.toggleFollowing}
          totalUsers={this.props.totalUsers}
          setInFollowingProcess={this.props.setInFollowingProcess}
          currentPage={this.props.currentPage}
          getOutInFollowingProcess={this.props.getOutInFollowingProcess}
          setCurrentPage={this.setCurrentPage}
          inFollowingProcess={this.props.inFollowingProcess}
          usersCountOnPage={this.props.users}
          usersData={this.props.usersData}
        />
      </>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    usersData: getDataUser(state),
    isPreloader: getDataIsPrelouder(state),
    totalUsers: getDataTotalUsers(state),
    currentPage: getDataCurrentPage(state),
    inFollowingProcess: getDataInFollowingProgress(state),
    usersCountOnPage: getDataUsersCountOnPage(state),
  };
};

export default compose(
  withAuthReducer,
  connect(mapStatetoProps, {
    toggleFollowing,
    getOutInFollowingProcess,
    getUsers,
    setInFollowingProcess,
  })
)(FindUsersAPI);
