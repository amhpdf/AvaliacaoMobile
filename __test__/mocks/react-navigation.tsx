const createNavigationMock = () => {
  const navigateMock = {
    goBack: jest.fn(),
    navigate: jest.fn(),
    isFocused: jest.fn(),
  };
  return {
    navigation: navigateMock as any,
    navigateMock,
  };
};

export { createNavigationMock };
