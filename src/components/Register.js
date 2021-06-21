import React from "react";

// import { useState, useEffect } from "react";

export default function Register(props) {
  return (
    <div className="container">
      <form class="ui form">
        <div class="field">
          <label>Name</label>
          <div class="two fields">
            <div class="field">
              <input
                type="text"
                name="shipping[first-name]"
                placeholder="First Name"
              />
            </div>
            <div class="field">
              <input
                type="text"
                name="shipping[last-name]"
                placeholder="Last Name"
              />
            </div>
          </div>
        </div>

        <h4 class="ui dividing header">Billing Information</h4>
        <div class="field">
          <label>Form of Payment</label>
          <div class="ui selection dropdown">
            <input type="hidden" name="card[type]" />
            <div class="default text">Type</div>
            <i class="dropdown icon"></i>
            <div class="menu">
              <div class="item" data-value="visa">
                <i class="visa icon"></i>
                Visa
              </div>
              <div class="item" data-value="amex">
                <i class="amex icon"></i>
                American Express
              </div>
              <div class="item" data-value="discover">
                <i class="discover icon"></i>
                Discover
              </div>
            </div>
          </div>
        </div>

        <h4 class="ui dividing header">Receipt</h4>
        <div class="field">
          <label>Send Receipt To:</label>
          <div class="ui fluid multiple search selection dropdown">
            <input type="hidden" name="receipt" />
            <i class="dropdown icon"></i>
            <div class="default text">Saved Contacts</div>
            <div class="menu">
              <div class="item" data-value="jenny" data-text="Jenny">
                <img
                  class="ui mini avatar image"
                  src="/images/avatar/small/jenny.jpg"
                />
                Jenny Hess
              </div>
              <div class="item" data-value="elliot" data-text="Elliot">
                <img
                  class="ui mini avatar image"
                  src="/images/avatar/small/elliot.jpg"
                />
                Elliot Fu
              </div>
              <div class="item" data-value="stevie" data-text="Stevie">
                <img
                  class="ui mini avatar image"
                  src="/images/avatar/small/stevie.jpg"
                />
                Stevie Feliciano
              </div>
              <div class="item" data-value="christian" data-text="Christian">
                <img
                  class="ui mini avatar image"
                  src="/images/avatar/small/christian.jpg"
                />
                Christian
              </div>
              <div class="item" data-value="matt" data-text="Matt">
                <img
                  class="ui mini avatar image"
                  src="/images/avatar/small/matt.jpg"
                />
                Matt
              </div>
              <div class="item" data-value="justen" data-text="Justen">
                <img
                  class="ui mini avatar image"
                  src="/images/avatar/small/justen.jpg"
                />
                Justen Kitsune
              </div>
            </div>
          </div>
        </div>
        <div class="ui segment">
          <div class="field">
            <div class="ui toggle checkbox">
              <input type="checkbox" name="gift" tabIndex="0" class="hidden" />
              <label>Do not include a receipt in the package</label>
            </div>
          </div>
        </div>
        <div class="ui button" tabIndex="0">
          Submit Order
        </div>
      </form>
    </div>
  );
}
