import { useState } from 'react';

const Comments = ({ isCommentsShown, comments, slug }) => {
  const [messageInput, setMessageInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [isBeingSent, setIsBeingSent] = useState(false);

  const commentSubmitHandler = e => {
    e.preventDefault();

    setIsBeingSent(true);

    if (messageInput && nameInput && emailInput) {
      fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({
          name: nameInput,
          email: emailInput,
          message: messageInput,
          slug,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(res => {
        alert('Comment sent');
        setMessageInput('');
        setNameInput('');
        setEmailInput('');
      });
    }

    setIsBeingSent(false);
  };

  return (
    <>
      <ul className="w-[90%] md:w-3/4 lg:w-1/2 mx-auto mb-8">
        {isCommentsShown &&
          comments &&
          comments.length !== 0 &&
          comments.map(cm => {
            return (
              <li
                key={cm.content + cm.name}
                className="flex flex-col border-b-[1px] border-customText py-3"
              >
                <p className="capitalize">{cm.content}</p>
                <span className="ml-auto capitalize">By {cm.name}</span>
              </li>
            );
          })}
      </ul>

      {isCommentsShown && (
        <form
          onSubmit={commentSubmitHandler}
          className="w-[90%] md:w-3/4 lg:w-1/2 max-w-5xl mx-auto flex flex-col gap-5 text-customLight"
        >
          <input
            type="text"
            placeholder="Name..."
            value={nameInput}
            onChange={e => setNameInput(e.target.value)}
            className="px-4 py-3 w-full rounded-full bg-customGrey text-lg border-2 border-transparent outline-none focus:border-customBlue placeholder:text-[16px]"
            required
          />
          <input
            type="email"
            placeholder="Email..."
            value={emailInput}
            onChange={e => setEmailInput(e.target.value)}
            className="px-4 py-3 w-full rounded-full bg-customGrey text-lg border-2 border-transparent outline-none focus:border-customBlue placeholder:text-[16px]"
            required
          />
          <textarea
            placeholder="Message..."
            value={messageInput}
            onChange={e => setMessageInput(e.target.value)}
            className="px-4 py-3 w-full rounded-[15px] bg-customGrey text-lg border-2 border-transparent outline-none focus:border-customBlue placeholder:text-[16px]"
            required
          />

          <button
            disabled={
              !messageInput || !nameInput || !emailInput || isBeingSent
                ? true
                : false
            }
            className="text-customLight border-2 border-customBlue rounded-full p-2 disabled:border-customLight disabled:opacity-25"
          >
            Send
          </button>
        </form>
      )}
    </>
  );
};

export default Comments;
