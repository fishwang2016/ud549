function AddressBook (){

	this.contacts=[];

	}

AddressBook.prototype.addContact = function(contact){
	this.contacts.push(contact);
}

AddressBook.prototype.getContact = function(index){

	return this.contacts[index];

}

AddressBook.prototype.deleteContact = function(index){

	delete this.contacts[index];

	return this;
}