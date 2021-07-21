import Card from "./components/Card";
import MiniCard from "./components/MiniCard";
import MyChart from "./components/Chart";
const Main = () => {
  return (
    <main className="container px-lg-5 mt-3">
      <div className="row mb-5">
        <Card text="Total Number of Customers" number="23,596" />
        <Card text="Total Number of Transactions" number="3,456" />
        <Card text="Total Sale Amount" number="N4,456,787" />
        <Card text="Total Points Rewarded" number="345" />
      </div>

      <div className="border bg-white row rounded-3 ps-lg-4 chart ">
        <div className="w-75 border-end py-4">
          <div className="d-flex">
            <p className="me-3 mb-0 fw-bold fs-5">Today’s Trend</p>
            <i className="fas fa-filter mt-2"></i>
          </div>
          <small className="fs">as of 23rd May, 2021, 09:42pm</small>

          <MyChart />
        </div>

        <div className="w-25 p-0 ">
          <MiniCard text="Customer Visits" number="65" />
          <MiniCard text="Transactions" number="23" />
          <MiniCard text="Sale Amount" number="N145,370" />
          <MiniCard text="Points Rewarded" number="43" />
        </div>
      </div>
    </main>
  );
};

export default Main;
