import { useRef, useState } from "react";
import { MessageInt } from "./model";
import Message from "./components/Message";

const App = () => {
  const inputMessage = useRef<HTMLInputElement>(null);
  const [messData, setMessData] = useState<MessageInt[]>([]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (inputMessage) {
      const mess: MessageInt = {
        id: Math.round(Math.random() * Date.now()),
        message: inputMessage?.current?.value,
        date: Date.now(),
      };
      setMessData((prevData) => [...prevData, mess]);
    }

    (document.getElementById("inputMessage") as HTMLInputElement).value = "";
  };

  return (
    <div>
      <h2>Poster un message</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Entrez un message"
          id="inputMessage"
          ref={inputMessage}
        />
        <input type="submit" value="Envoyer" />
      </form>
      <h2>Liste des messages</h2>
      <div>
        {messData?.map((mess) => (
          <Message
            mess={mess}
            messData={messData}
            setMessData={setMessData}
            key={mess.id}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
