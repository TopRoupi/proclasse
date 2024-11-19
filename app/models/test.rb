# == Schema Information
#
# Table name: tests
#
#  id           :uuid             not null, primary key
#  disabled     :boolean
#  expected_out :string
#  hidden       :boolean
#  input        :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  challenge_id :uuid             not null
#
# Indexes
#
#  index_tests_on_challenge_id  (challenge_id)
#
# Foreign Keys
#
#  fk_rails_...  (challenge_id => challenges.id)
#
class Test < ApplicationRecord
  belongs_to :challenge
end
