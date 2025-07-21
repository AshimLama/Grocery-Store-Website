import React from "react";

const Template = () => {
  return (
    <section className="py-12 bg-green-50">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-3xl font-bond mb-4">
          Free Delivery on your First Order
        </h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Use code FRESH20 at checkout for free delivery on orders over Rs.250
        </p>
        <button className="rounded-full bg-green-600 hover:bg-green-700 text-white px-3 py-2 mx-auto">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Template;
