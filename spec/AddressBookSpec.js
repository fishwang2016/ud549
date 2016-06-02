describe("Address Book",function(){

			it("Should be able to add a contact.",function(){

				var addressBook = new AddressBook();
				var thisContact = new Contact();

				addressBook.addContact(thisContact);

				expect(addressBook.getContact(0)).toBe(thisContact);


			}

		);

        it('should be able to delete a contact',function(){

        	var addressBook = new AddressBook();
        	var newContact = new Contact();

        	addressBook.addContact(newContact);
        	var newAddressBook = addressBook.deleteContact(0)
        	expect(newAddressBook).toBe(addressBook);


        });

});