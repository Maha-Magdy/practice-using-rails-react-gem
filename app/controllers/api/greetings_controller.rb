class Api::GreetingsController < ApplicationController
    include Response

    def greeting
        @greeting = Greeting.all.sample
        json_response(@greeting)
    end
end
