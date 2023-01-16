import { shallow, ShallowWrapper } from "enzyme";
import { Provider } from "react-redux";
import store from "../../store";
import { fetchProductsData } from "../../store/products-actions";

import ProductsTable from "./ProductsTable";

describe("ProductsTable component", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <ProductsTable />
      </Provider>
    );
  });

  it("should call 'showModalHandler' function when a row is clicked", () => {
    wrapper.setProps({
      products: [
        { id: 1, name: "product 1", year: 2020 },
        { id: 2, name: "product 2", year: 2021 },
      ],
      loaded: true,
      responseOK: true,
    });
    const spy = jest.spyOn(wrapper.instance() as any, "showModalHandler");
    wrapper.find("MyTr").first().simulate("click");
    expect(spy).toHaveBeenCalled();
  });

  it("should dispatch 'fetchProductsData' action when 'active' or 'query' state changes", () => {
    const spy = jest.spyOn(store, "dispatch") as jest.Mock<any, any>;
    wrapper.setProps({ active: true });
    expect(spy).toHaveBeenCalledWith(fetchProductsData());
    wrapper.setProps({ query: "some query" });
    expect(spy).toHaveBeenCalledWith(fetchProductsData());
  });
});
