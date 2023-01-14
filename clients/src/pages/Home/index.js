import React, { useEffect, useState } from 'react';
import UserServices from '../../services/UserServices';
import './../../styles/home.scss';
// https://codepen.io/d10111/pen/OJwJMgw demo

const Home = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({});
  const [message, setMessage] = useState("");

  useEffect(() => {
    getUsers();
  }, [])

  const getUsers = () => {
    UserServices.usersList().then((response) => {
      if (response.data.status === true) {
        setUsers(response.data.data)
      }
    }).catch((error) => {
      console.log(error)
    })
  }


  const handleClickUser = (item) => {
    setIsChatOpen(!isChatOpen);
    setUser(item)
  }


  const handleSendMsg = async (e) => {
    e.preventDefault()
    let payload ={
      message:message,
      to:user._id
    }
    if(message){
      UserServices.addMessage(payload).then((response)=>{
        console.log(response)
      }).catch((error)=>{
        console.log(error)
      })
    }
    console.log(payload)
    // const data = await JSON.parse(
    //   localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
    // );
    // socket.current.emit("send-msg", {
    //   to: currentChat._id,
    //   from: data._id,
    //   msg,
    // });

    // await axios.post(sendMessageRoute, {
    //   from: data._id,
    //   to: currentChat._id,
    //   message: msg,
    // });

    // const msgs = [...messages];
    // msgs.push({ fromSelf: true, message: msg });
    // setMessages(msgs);
  };


  return (
    <div>
      {/* char-area */}
      <section className="message-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="chat-area">
                {/* chatlist */}
                <div className="chatlist">
                  <div className="modal-dialog-scrollable">
                    <div className="modal-content">
                      <div className="chat-header">
                        <div className="msg-search">
                          <input type="text" className="form-control" placeholder="Search" aria-label="search" />
                          <a className="add"><img className="img-fluid" src="https://mehedihtml.com/chatbox/assets/img/add.svg" alt="add" /></a>
                        </div>

                      </div>
                      <div className="modal-body">
                        {/* chat-list */}
                        <div className="chat-lists">
                          <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="Open" role="tabpanel" aria-labelledby="Open-tab">
                              {/* chat-list */}
                              <div className="chat-list">
                                {users && users.map((item, index) => {
                                  return (
                                    <a className="d-flex align-items-center" key={index} onClick={() => handleClickUser(item)}>
                                      <div className="flex-shrink-0">
                                        <img className="img-fluid" src="https://mehedihtml.com/chatbox/assets/img/user.png" alt="user img" />
                                      </div>
                                      <div className="flex-grow-1 ms-3">
                                        <h3>{item.name}</h3>
                                        <p>front end developer</p>
                                      </div>
                                    </a>

                                  )
                                })}

                              </div>
                              {/* chat-list */}
                            </div>

                          </div>
                        </div>
                        {/* chat-list */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* chatlist */}
                {/* chatbox */}
                <div className={`chatbox ${isChatOpen ? 'showbox' : ''}`}>
                  <div className="modal-dialog-scrollable">
                    <div className="modal-content">
                      <div className="msg-head">
                        <div className="row">
                          <div className="col-8">
                            <div className="d-flex align-items-center">
                              <span className="chat-icon" onClick={() => setIsChatOpen(!isChatOpen)}><img className="img-fluid" src="https://mehedihtml.com/chatbox/assets/img/arroleftt.svg" alt="image title" /></span>
                              <div className="flex-shrink-0">
                                <img className="img-fluid" src="https://mehedihtml.com/chatbox/assets/img/user.png" alt="user img" />
                              </div>
                              <div className="flex-grow-1 ms-3">
                                <h3>{user?.name}</h3>
                                <p>front end developer</p>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                      <div className="modal-body">
                        <div className="msg-body">
                          <ul>
                            <li className="sender">
                              <p> Hey, Are you there? </p>
                              <span className="time">10:06 am</span>
                            </li>

                            <li className="repaly">
                              <p> Last Minute Festive Packages From Superbreak</p>
                              <span className="time">10:20 am</span>
                            </li>

                            <li>
                              <div className="divider">
                                <h6>Today</h6>
                              </div>
                            </li>
                            <li className="repaly">
                              <p> Last Minute Festive Packages From Superbreak</p>
                              <span className="time">10:36 am</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="send-box">
                        <form onSubmit={handleSendMsg}>
                          <input type="text" onChange={(e)=>setMessage(e.target.value)} className="form-control" aria-label="message…" placeholder="Write message…" />
                          <button type="submit"><i className="fa fa-paper-plane" /> Send</button>
                        </form>
                        <div className="send-btns">
                          <div className="attach">
                            <div className="button-wrapper">
                              <span className="label">
                                <img className="img-fluid" src="https://mehedihtml.com/chatbox/assets/img/upload.svg" alt="image title" /> attached file
                              </span><input type="file" name="upload" id="upload" className="upload-box" placeholder="Upload File" aria-label="Upload File" />
                            </div>
                            <select className="form-control" id="exampleFormControlSelect1">
                              <option>Select template</option>
                              <option>Template 1</option>
                              <option>Template 2</option>
                            </select>
                            <div className="add-apoint">
                              <a href="#" data-toggle="modal" data-target="#exampleModal4"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                <path d="M8 16C3.58862 16 0 12.4114 0 8C0 3.58862 3.58862 0 8 0C12.4114 0 16 3.58862 16 8C16 12.4114 12.4114 16 8 16ZM8 1C4.14001 1 1 4.14001 1 8C1 11.86 4.14001 15 8 15C11.86 15 15 11.86 15 8C15 4.14001 11.86 1 8 1Z" fill="#7D7D7D" />
                                <path d="M11.5 8.5H4.5C4.224 8.5 4 8.276 4 8C4 7.724 4.224 7.5 4.5 7.5H11.5C11.776 7.5 12 7.724 12 8C12 8.276 11.776 8.5 11.5 8.5Z" fill="#7D7D7D" />
                                <path d="M8 12C7.724 12 7.5 11.776 7.5 11.5V4.5C7.5 4.224 7.724 4 8 4C8.276 4 8.5 4.224 8.5 4.5V11.5C8.5 11.776 8.276 12 8 12Z" fill="#7D7D7D" />
                              </svg> Appoinment</a>
                            </div>
                          </div>
                        </div>
                        <button type='button' onClick={() => {
                          localStorage.clear();
                          window.location.href = "/"
                        }}>
                          logout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* chatbox */}
            </div>
          </div>
        </div>
      </section>
      {/* char-area */}

    </div>
  )
}

export default Home
