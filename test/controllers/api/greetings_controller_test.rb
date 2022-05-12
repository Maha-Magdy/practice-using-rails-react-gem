require 'test_helper'

module Api
  class GreetingsControllerTest < ActionDispatch::IntegrationTest
    test 'should get index' do
      get api_greetings_index_url
      assert_response :success
    end
  end
end
