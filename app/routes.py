from flask import render_template, redirect, url_for
from app import app
from forms import ContactForm


@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')


@app.route('/contacts', methods=['GET', 'POST'])
def contacts():
    form = ContactForm()
    if form.validate_on_submit():
        return redirect(url_for('contacts'))
    return render_template('contacts.html', form=form)


@app.route('/reviews')
def reviews():
    return render_template('reviews.html')


@app.route('/prices')
def prices():
    return render_template('prices.html')


@app.route('/schedule')
def schedule():
    return render_template('schedule.html')
