require 'test_helper'

class MasteriesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get masteries_index_url
    assert_response :success
  end

end
