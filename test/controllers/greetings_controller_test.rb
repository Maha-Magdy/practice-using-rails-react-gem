 # frozen_string_literal: false

require 'test_helper'

class GreetingsControllerTest < ActionDispatch::IntegrationTest
  test 'should get index' do
    get greetings_index_url
    assert_response :success
  end
end
