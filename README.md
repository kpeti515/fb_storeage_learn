Idea was to store some important info about PSW-s and create a supplier "phone book".
# Features/modules
## Part submission warrant (PSW)
In automotive industry this is the warranty and customer approval for a given product.

If a PSW approved, it means that supplier is able to ship parts in serial condition.

Collected data:

 - Drawing number
 - Supplier company name
 - Project name
 - Customer company name
 - Status
 - Sign date
 - The document itself (available to download)

## Supplier address book
This is like a phone book.
Collected data:

 - Supplier company name
 - Supplier contact name
 - Supplier contact person's e-mail
 - Supplier contact person's phone number
 - Supplier company plant address
 - Supplier company website address

This section can generate a QR code too, if you read this QR code with your phone, you can save the partner details instantly to your mobile phone, and there is no real chance for a typo during saving.

All shown field is a link (except company name and contact name) so you can send e-mail, call, check website, visit on google maps via one click.

## Admin portal
On admin portal you can maintain basic details, like:

 - Existing drawing numbers
 - Existing suppliers
 - Existing projects
 - Existing customers

This project is currently abandoned due to the fact that at our company only programmers can write programs (external or internal programmers).

 At the moment my job is not a programmer and I lost my interest in it.

At least it was a good learning opportunity before I faced with the facts about program writing rights :) 

Made with [React](https://reactjs.org/).
Used [Firebase](https://firebase.google.com/) for storing data.