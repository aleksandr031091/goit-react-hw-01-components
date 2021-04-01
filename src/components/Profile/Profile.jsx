const Pofile = ({
  user: {
    avatar,
    name,
    tag,
    location,
    stats: { Followers, Views, Likes },
  },
}) => (
  <div className="profile">
    <div className="description">
      <img src={avatar} alt="Аватар пользователя" class="avatar" />
      <p className="name">{name}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>

    <ul class="stats">
      <li>
        <span className="label">Followers</span>
        <span className="quantity">{Followers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity">{Views}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity">{Likes}</span>
      </li>
    </ul>
  </div>
);

export default Pofile;
