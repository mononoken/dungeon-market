---
Date: 2024-07-08
Topic: Initial Plan
---

# Initial Plan

This project is inspired by [an The Odin Project assignment](https://www.theodinproject.com/lessons/react-new-shopping-cart). The requirements listed at the time were:

1. Minimum two pages, home page and shop page.
2. Include a navigation bar which is shown on all pages.
3. Navigation bar should have:
    - an indicator for number of items in the cart
    - checkout button (don't need to include checkout logic)
4. Card elements for each product
    - Include input for quantity with decrement and increment buttons
    - Add to cart button
5. Fetch shop items from [FakeStore API](https://fakestoreapi.com/) or similar
6. "Test your app thoroughly"

## Happy Path

1. User opens the home page. Home page has a "splash" intro and a display for featured items.
2. User clicks a link to the shopping page.
3. User sees a list of items from the API in cards.
4. User can click an indicator to increment an item to quantity of 3 and then add item to the cart.
5. Cart icon in navigation bar displays quantity of 3.

## Components

### App

- render app header
- render navbar
- render page content

### Card

- render name of item
- render description of item (collapsible)
- render Quantity component

### Card List

-render cards

### Quantity

- render quantity
- render decrement button
- render increment button
- should submit be on this component?

### Navigation bar

- render buttons to each page
- render Cart

### Cart

- render quantity of items in cart
- render collapsible list of items in cart
- render remove button for each item in cart
- render checkout link
