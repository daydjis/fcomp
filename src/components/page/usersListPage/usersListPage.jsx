import React, { useState, useEffect } from "react";
import { paginate } from "../../../utils/paginate";
import Pagination from "../../common/pagination";
import GroupList from "../../common/groupList";
import api from "../../../api";
import SearchStatus from "../../ui/searchStatus";
import UserTable from "../../common/table/usersTable";
import _ from "lodash";

const UsersListPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfession] = useState();
    const [selectedProf, setSelectedProf] = useState();
    const [sortBy, setSortBy] = useState({ path: "name", order: "asc" });
    const pageSize = 8;
    const [search, setSearch] = useState("");

    const [users, setUsers] = useState();
    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId));
    };
    const flagsYouWant = "i";

    const dynamicRegExp = new RegExp(`${search}`, flagsYouWant);

    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
    }, []);

    const handleToggleBookMark = (id) => {
        const userIndex = users.findIndex((user) => user._id === id);
        const newUsers = [...users];
        newUsers[userIndex].bookmark
            ? (newUsers[userIndex].bookmark = false)
            : (newUsers[userIndex].bookmark = true);
        setUsers(newUsers);
    };
    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfession(data));
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf]);

    const handleProfessionSelect = (item) => {
        setSelectedProf(item);
        setSearch("");
    };

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const handleSort = (item) => {
        setSortBy(item);
        selectedProf(undefined);
    };

    if (users) {
        const filteredUsers = search
            ? users.filter((user) => {
                return dynamicRegExp.test(user.name);
            })
            : selectedProf
                ? users.filter((user) => {
                    return (
                        JSON.stringify(user.profession) ===
                        JSON.stringify(selectedProf)
                    );
                })
                : users;

        const count = filteredUsers.length;

        const sortedUsers = _.orderBy(
            filteredUsers,
            [sortBy.path],
            [sortBy.order]
        );

        const handleSearch = (e) => {
            setSearch(e.target.value);
        };

        const clickSearch = () => {
            console.log(sortedUsers);
            users.filter((user) => {
                if (dynamicRegExp.test(user.name)) {
                    return console.log(user.name + " ______прошёл_______");
                } else {
                    return console.log(user.name + "  не прошёл");
                }
            });
        };

        const usersCrop = paginate(sortedUsers, currentPage, pageSize);

        usersCrop.length || count === 0 || handlePageChange(currentPage - 1);

        const clearFilter = () => {
            setSelectedProf();
            setSearch("");
        };
        return (
            <>
                <div className="d-flex">
                    {professions && (
                        <div className="d-flex flex-column flex-shrink-0 p-3">
                            <GroupList
                                selectedItem={selectedProf}
                                items={professions}
                                onItemSelect={handleProfessionSelect}
                            />
                            <button
                                className="btn btn-secondary mt-2"
                                onClick={clearFilter}
                            >
                                Сбросить фильтр
                            </button>
                        </div>
                    )}
                    <div className="d-flex flex-column">
                        <SearchStatus length={count} />
                        <>
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Recipient's username"
                                    aria-label="Recipient's username"
                                    aria-describedby="button-addon2"
                                    value={search}
                                    onChange={handleSearch}
                                />
                                <button
                                    className="btn btn-outline-secondary"
                                    onClick={clickSearch}
                                    type="submit"
                                    id="button-addon2"
                                >
                                    Найти
                                </button>
                            </div>
                        </>

                        {count > 0 && (
                            <UserTable
                                users={usersCrop}
                                selectedSort={sortBy}
                                onSort={handleSort}
                                onDelete={handleDelete}
                                onToggleBookMark={handleToggleBookMark}
                            />
                        )}

                        <div className="d-flex justify-content-center">
                            <Pagination
                                itemsCount={count}
                                pageSize={pageSize}
                                currentPage={currentPage}
                                onPageChange={handlePageChange}
                            />
                        </div>
                    </div>
                </div>
            </>
        );
    }
    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default UsersListPage;
