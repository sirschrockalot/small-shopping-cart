import React from "react";
import product from "../api/product";
import localStorage from "local-storage";

import DataTable, { createTheme } from "react-data-table-component";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartData: [],
      loading: true,
      columns: [],
      testData: [],
    };
  }

  cartDataStuff = (cartData) => {
    let testCustomers = [];

    for (let i = 0; i < cartData.length; i++) {
      let cart = cartData[i];
      let customer = cartData[i].customer;
      let products = cartData[i].products;
      console.log(products);
      for (let j = 0; j < products.length; j++) {
        // console.log(products.length);
        const testCustomer = {
          // id: customer.id,
          customerName: customer.name + " " + customer.lastName,
          paymentMethod: customer.paymentMethod,
          totalCost: cart.totalCost,
          createdDate: cart.createdDate,
          productName: products[j].name,
          flavor: products[j].flavor,
          price: products[j].price,
          size: products[j].size,
          qty: products[j].qty,
        };
        testCustomers.push(testCustomer);
        this.setState({ testData: [...testCustomers] });
      }
    }
  };

  async getCartData() {
    const res = await product.get("/cart", {});
    // console.log(res.data);
    this.setState({ loading: false, cartData: res.data });
    this.cartDataStuff(this.state.cartData);
  }
  componentDidMount() {
    this.getCartData();
    console.log(localStorage.get("document"));

    // Add static columns to columns array state
    const static_columns = [
      // {
      //   name: "ID",
      //   selector: "id",
      //   sortable: true,
      // },
      {
        name: "Customer Name",
        selector: "customerName",
        sortable: true,
        // right: true,
      },
      {
        name: "Payment Method",
        selector: "paymentMethod",
        sortable: true,
        // right: true,
      },
      {
        name: "Total Cost",
        selector: "totalCost",
        sortable: true,
        // right: true,
      },
      {
        name: "Order Create Date",
        selector: "createdDate",
        sortable: true,
        resize: true,
        // right: true,
      },
      {
        name: "Product Name",
        selector: "productName",
        sortable: true,
        // right: true,
      },
      {
        name: "Flavor",
        selector: "flavor",
        sortable: true,
        // right: true,
      },
      {
        name: "Price",
        selector: "price",
        sortable: true,
        // right: true,
      },
      {
        name: "Size",
        selector: "size",
        sortable: true,
        // right: true,
      },
      {
        name: "Qty",
        selector: "qty",
        sortable: true,
        // right: true,
      },
    ];

    this.setState({ columns: [...this.state.columns, ...static_columns] }); //another array
  }

  render() {
    return (
      <div>
        <DataTable
          title="Rule 1 Orders By Cutomer"
          columns={this.state.columns}
          data={this.state.testData}
          theme="solarized"
        />
      </div>
    );
  }
}
export default HomePage;
