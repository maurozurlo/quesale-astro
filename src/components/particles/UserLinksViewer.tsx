const LinkList = ({ links }) => {
  return (
    <div className="list" id="link-list">
      {links.map((link) => (
        <div className="list-item" key={link.name}>
          <div className="list-item-content">
            <div className="list-item-title">{link.name}</div>
            <div className="list-item-description is-flex is-justify-content-space-between">
              <a href={link.url}>{link.url}</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LinkList;
