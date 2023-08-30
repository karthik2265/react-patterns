const withLoading = (ListComponent) => {
  return ({ isLoading, ...listProps }) => {
    console.log(listProps, isLoading);
    if (isLoading) {
      return <h2>Loading...</h2>;
    }
    return <ListComponent {...listProps} />;
  };
};

export default withLoading;
