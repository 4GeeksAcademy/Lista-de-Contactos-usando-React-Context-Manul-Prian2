const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contactos : [],
		},

		actions: {
			// Use getActions to call a function within a fuction
			CreateContact:  ({nombre, direccion, telefono, correo}) => {
				//fetch POST
				const myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				
				const raw = JSON.stringify({
				  "name": nombre,
				  "phone": telefono,
				  "email": correo,
				  "address": direccion
				});
				
				const requestOptions = {
				  method: "POST",
				  headers: myHeaders,
				  body: raw,
				  redirect: "follow"
				};
				
				fetch("https://playground.4geeks.com/contact/agendas/ronalse/contacts", requestOptions)
				  .then((response) => response.json())
				  .then((result) => console.log(result.contacts))
				  .catch((error) => console.error(error));
			},

			Contacts: async() => {  
						fetch("https://playground.4geeks.com/contact/agendas/ronalse/contacts" ,{
							method : "GET"
						})
						.then((response) => response.json())
						.then((result) => {
							setStore({contactos: result.contacts });
							console.log(result)
						}
						)
						.catch((error) => console.error(error));
			},

			DeleteContact: async (id) => {
                const myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");

                const raw = JSON.stringify({
                    // En este ejemplo, se está enviando un cuerpo de solicitud vacío para eliminar el contacto.
                });

                const requestOptions = {
                    method: "DELETE",
                    headers: myHeaders,
                    body: raw,
                    redirect: "follow"
                };

                return fetch(`https://playground.4geeks.com/contact/agendas/ronalse/contacts/${id}`, requestOptions)
				.then(response => {
					if (!response.ok) {console.log("error")}
					return console.log(response);})
                    .then(result => {
                        console.log(result);
                        return result;
                    })
                    .catch(error => console.error(error));
            },

			EditContact : async (idtwo , userInputTwo) => {
				const myHeaders = new Headers();
					myHeaders.append("Content-Type", "application/json");

					const raw = JSON.stringify({
					"name": userInputTwo.nombredos,
					"phone": userInputTwo.direcciondos,
					"email": userInputTwo.telefonodos,
					"address": userInputTwo.correodos
					});

					const requestOptions = {
					method: "PUT",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
					};
					
					try {
						const resp = await fetch(`https://playground.4geeks.com/contact/agendas/ronalse/contacts/${idtwo}`, requestOptions)
						const data = await resp.json();
						console.log(data);
						return true;
					} catch (error) {
						console.log("error not found")
						return false
					}
			},

			CreateAgenda : async () =>{
				
				const requestOptions = {
				  method: "POST",
				  redirect: "follow"
				};
				
				try {
					const resp = await fetch(`https://playground.4geeks.com/contact/agendas/ronalse`, requestOptions)
					const data = await resp.json()
					console.log(data)
					return true
				} catch (error) {
					return false
				}
			},


			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;