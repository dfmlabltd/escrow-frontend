import React from "react";

export default function CTA() {
  return (
    <section id="cta">
      <div className="container mx-auto px-6 py-12 flex flex-col relative">
        <div className="w-full flex flex-col justify-between bg-gradient-to-r from-xcrow_default via-xcrow_secondary to-xcrow_default md:flex-row">
          <div className="px-6 py-14 md:max-w-2xl md:px-16">
            <div className="space-y-4">
              <h3 className="text-3xl text-white font-semibold">
                X_Crow is your Reliable Decentralized Service provider
              </h3>
              <p className="text-sm text-white">
                X_Crow provides trust and confidence when creating a contract
                with anonymous
              </p>
            </div>
            <div className="mt-10 relative">
              <button className="px-6 text-white text-sm py-4 bg-xcrow_secondary rounded md:px-16">
                Create Contract
              </button>
            </div>
          </div>
          <div>
            <div className="xcrow_cta_img">
              <img src="x_crow Asset/Group 11261.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
