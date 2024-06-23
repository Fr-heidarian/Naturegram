export default function PostCard({ post }) {
  const { profileImage, profileName, imageUrl, title, likes, description } =
    post;

  return (
    <div className="flex flex-col w-2/5 bg-white rounded-xl mx-auto my-5">
      <div className="p-2">
        <img
          src={profileImage}
          alt="author"
          className="w-14 h-14 rounded-full"
        />
        <h2>{profileName}</h2>
      </div>
      <img src={imageUrl} alt="blog pic" />
      <div className="flex justify-between p-2">
        <h2>{title}</h2>
        <h2>{likes}</h2>
      </div>
      <p className="p-2">{description.substring(0, 50)}</p>
    </div>
  );
}
