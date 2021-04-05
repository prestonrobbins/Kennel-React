import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./home/home"
import {AnimalCard} from "./animal/AnimalCard"
import { LocationCard } from "./location/LocationCard"
import { EmployeeCard } from "./employees/EmployeeCard"
import { CustomerCard } from "./customer/CustomerCard"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/animals">
                <AnimalCard />
                <AnimalCard />
                <AnimalCard />
            </Route>
            <Route path="/locations">
                <LocationCard />
                <LocationCard />
                <LocationCard />
            </Route>
            <Route path="/employees">
                <EmployeeCard />
                <EmployeeCard />
                <EmployeeCard />
            </Route>
            <Route path="/customers">
                <CustomerCard />
                <CustomerCard />
                <CustomerCard />
            </Route>
           
        </>
    )
}