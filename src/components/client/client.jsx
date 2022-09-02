import "./client.scss";
import ChatPage from "../../routes/chat/chat";
import LoginPage from "../../routes/login/login";
import React from "react";
import useClientLogic from "./client-logic.jsx";

let urlParam = '';
const Client = (props) => {
  const {clientUrl, setClientUrl} = useClientLogic();

  function navigate(url) {
    let newUrl = url;
    if (url.includes('?')) {
      const param = url.slice(url.indexOf('?')+1);
      urlParam = param;
      newUrl = url.slice(0, url.indexOf('?'));
      console.log(url, newUrl, urlParam);
    }
    setClientUrl(newUrl);
  }

  const addNewUser = (user) => {
    const newUsers = {...props.apiData.usersData, ...user};
    console.log(newUsers);

    props.apiData.setUsersData(newUsers);
  }

  const storeClientData = (data) => {
    const oldData = localStorage[props.name] || {};
    const newData = {...oldData, ...data};
    localStorage.setItem(`${props.name}-sessions`, JSON.stringify(newData));
  }

  const getPage = () => {
    console.log('page param: ' + urlParam)
    if (clientUrl === '/') {
      return <ChatPage navigate={navigate} param={urlParam} saveData={storeClientData} clientName={props.name}/>
    } else if (clientUrl === '/login') {
      return <LoginPage navigate={navigate} usersData={props.apiData.usersData} addUser={addNewUser}/>
    }
    urlParam = '';
  }

  return (
      <div className="client">
        {getPage()}
      </div>
  );
};

export default Client;
