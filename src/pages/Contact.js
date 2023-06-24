import React from 'react';

function Contact() {
	return (
		<div className="contact">
			<h3>İletişim Kur</h3>
			<form>
				<label>
					<span>Email Adresiniz</span>
					<input type="email" name="email" required />
				</label>
				<label>
					<span>Mesaj</span>
					<textarea name="message" required></textarea>
				</label>
				<button>Gönder</button>
			</form>
		</div>
	);
}

export default Contact;
