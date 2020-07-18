import React from "react";
import reducer from "../store/reducers";
import {
    USER_AUTHENTICATED,
    USER_LOGGED_OUT,
    CHANGE_THEME,
    changeTheme
} from "../store/actions";
import {
    describe,
    expect,
    it
} from "@jest/globals";

describe( "InitialState reducer", () => {
    it( "should return the initial state", () => {
        expect( reducer( undefined, {} ) ).toEqual( {
            isAuthenticated: false,
            theme: "darkly", 
            tokenLocal: "",
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        } );
    } );
    it( "should return is logined in true", () => {
        expect(
            reducer( [], {
                type: USER_LOGGED_OUT,
                payload: {
                    isAuthenticated: false
                },
            } )
        ).toEqual( {
            isAuthenticated: false,
            tokenLocal: "",
        } );
    } );
    it( "should return isAuthenticated  false", () => {
        expect(
            reducer( [], {
                type: USER_AUTHENTICATED,
                payload: {
                    isAuthenticated: true,
                },
            } )
        ).toEqual( {
            isAuthenticated: true,
        } );
    } );
    it( "should return is Theme", () => {
        const payload = {
            theme: "journal"
        }
        const expectedAction = {
            type: CHANGE_THEME,
            payload,
        };
        expect( changeTheme( payload ) ).toEqual( expectedAction );
    } );
} );