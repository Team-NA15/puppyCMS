import React from 'react';

const AddDog = () => {
    return (
        <section className="main">
            <h2>New Dog:</h2>

            <form>
                <label for="name">Name</label>
                <input type="text" id="name" placeholder="Enter Here" />
                
                <label for="age">Age</label>
                <input type="number" id="age" defaultValue="0"/>

                <label for="care">Care</label>
                <select name="care">
                    <option value="boarding">Boarding</option>
                    <option value="grooming">Grooming</option>
                    <option value="daycare">Daycare</option>
                </select>

                <button type="submit">Add Dog</button>
            </form>
        </section>
    )
}

export default AddDog;