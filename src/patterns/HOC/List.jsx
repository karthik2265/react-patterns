const List = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </ul>
  );
};

export default List;
