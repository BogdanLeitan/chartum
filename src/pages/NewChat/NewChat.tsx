import Chat from "../../components/Chat/Chat";
import "./NewChat.css"

function NewChat() {
  return (
    <>
      <div className="main-container">
        <div className="subtitle">Search</div>
        <h1 className="title">What would you like to research?</h1>

        <Chat />
      </div>
    </>
  );
}

export default NewChat