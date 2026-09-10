import Chat from "../../components/Chat/Chat";
import ChatHeader from "../../components/Header/ChatHeader/ChatHeader";
import "./NewChat.css"

function NewChat() {
  return (
    <>
      <ChatHeader />
      <div className="content home-content">

            <div className="home-center">
              <p className="hero-greeting">Good evening, Bogdan</p>
              <h1 className="hero-title">What would you like to research?</h1>

              <Chat />
            </div>
      </div>
    </>
  );
}

export default NewChat;
