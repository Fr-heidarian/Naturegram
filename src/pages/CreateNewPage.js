
export default function CreateNewPage() {

  return (
    <div className="flex items-center justify-center flex-col p-2">
      <form className="w-2/5">
        <label>
          Author
          <input
            type="text"
            id="author"
            className="w-full p-3 m-2 border border-borderGray rounded box-border"
          />
        </label>
        <label>
          Title
          <input
            type="text"
            id="title"
            className="w-full p-3 m-2 border border-borderGray rounded box-border"
          />
        </label>
        <label>
          Description
          <textarea
            id="description"
            className="w-full p-3 m-2 border border-borderGray rounded box-border h-40"

          ></textarea>
        </label>
        <label>
          IsLiked?
          <input
            type="checkbox"
            id="isLiked"
          />
        </label>
        <div className="flex justify-center">
          <button
            className="bg-buttonColor text-white p-3 m-2 rounded hover:bg-buttonHoverColor"
          >
            Create New
          </button>
        </div>
      </form>
    </div>
  );
}
