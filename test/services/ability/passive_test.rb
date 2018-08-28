require 'test_helper'

class AbilitySendEmailTest < ActiveSupport::TestCase
  def subject(champion_id, fighter)
    Ability::Base.new(champion_id, fighter)
  end

  def champion_id
    champions(:aatrox).id
  end

  def fighter
    Fighter.new(champions(:aatrox).data.stats, 'right', champion_id)
  end

  test 'send alert emails if email was not send' do
    # perform_enqueued_jobs do
    #   Actions::SendEmail.new(test_app, params, languages(:italian))

    #   refute ActionMailer::Base.deliveries.empty?

    #   email = ActionMailer::Base.deliveries.last(3).first

    #   assert_equal ['support@liveanimations.org'], email.from
    #   assert_equal ['support@liveanimations.org'], email.to
    #   assert_equal test_app.name, email.subject
    #   assert_equal "Email was sent from: test@mail.ru Message: 'Test message'", email.body.to_s
    # end
  end
end
