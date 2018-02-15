describe('TicketMaster API based on Fetch API', () => {
	let target = ticketmasterApi

	ticketmasterApi = undefined


	describe('searchEventsOnASpanishCity', () => {
		let ticket

		beforeEach(done =>
			{
				setTimeout(() => {
					target.searchEventsOnASpanishCity('Barcelona')
						.then(_events => {
							ticket = _events._embedded.events

							done()
						})
						.catch(done)
				}, 100)
			}
		)

		it('should get results on search', () => {
			expect(ticket).not.toBeUndefined()

			expect(ticket.length > 0).toBeTruthy()
		})
	})

	

	describe('searchEventsOnASpanishCityAndSegmentName', () => {
		let ticket

		beforeEach(done => 
			{
				setTimeout(() => {
					target.searchEventsOnASpanishCityAndSegmentName('Barcelona', 'Music')
						.then(_events => {
							ticket = _events._embedded.events

							done()
						})
						.catch(done)
				}, 1000)
			}
		)

		it('should get results on search', () => {
			expect(ticket).not.toBeUndefined()

			expect(ticket.length > 0).toBeTruthy()
		})
	})



	describe('searchEventsOnASpanishCityAndKeyword', () => {
		let ticket

		beforeEach(done => 
			{
				setTimeout(() => {	
					target.searchEventsOnASpanishCityAndKeyword('Barcelona', 'Ismael')
						.then(_events => {
							ticket = _events._embedded.events

							done()
						})
						.catch(done)
				}, 1000)
			}
		)

		it('should get results on search', () => {
			expect(ticket).not.toBeUndefined()

			expect(ticket.length > 0).toBeTruthy()
		})
	})



	describe('searchEventsOnASpanishCityAndSegmentNameAndKeyword', () => {
		let ticket

		beforeEach(done => 
			{
				setTimeout(() => {
					target.searchEventsOnASpanishCityAndSegmentNameAndKeyword('Barcelona', 'Music', 'Mando')
						.then(_events => {
							ticket = _events._embedded.events

							done()
						})
						.catch(done)					
				}, 1000)
			}
		)

		it('should get results on search', () => {
			expect(ticket).not.toBeUndefined()

			expect(ticket.length > 0).toBeTruthy()
		})
	})



	describe('searchEventsDetails', () => {
		let ticket

		beforeEach(done =>
			{
				setTimeout(() => {
					target.searchEventsDetails('Z598xZ2qZ6Akk')
						.then(_events => {
							ticket = _events._embedded.events

							done()
						})
						.catch(done)
				}, 1000)
			}
		)

		it('should retrieve event details', () => {
			expect(ticket).not.toBeUndefined()

			expect(ticket.length > 0).toBeTruthy()
		})
	})


	describe('searchEventsOnASpanishCityAndSegmentNameWithPage', () => {
		let ticket

		beforeEach(done =>
			{
				setTimeout(() => {
					target.searchEventsOnASpanishCityAndSegmentNameWithPage('Madrid', 'Music', 1)
						.then(_events => {
							ticket = _events._embedded.events

							done()
						})
						.catch(done)
				}, 1000)
			}
		)

		it('should get results on search', () => {
			expect(ticket).not.toBeUndefined()

			expect(ticket.length > 0).toBeTruthy()
		})
	})


	describe('searchEventsOnASpanishCityAndSegmentNameAndKeywordWithPage', () => {
		let ticket

		beforeEach(done =>
			{
				setTimeout(() => {
					target.searchEventsOnASpanishCityAndSegmentNameAndKeywordWithPage('Madrid', 'Music', 'kkkkk',  3)
						.then(_events => {
							ticket = _events._embedded.events

							done()
						})
						.catch(done)
				}, 1000)
			}
		)

		it('should get results on search', () => {
			expect(ticket).toBeUndefined()

		})
	})

})