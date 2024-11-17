# == Schema Information
#
# Table name: professors
#
#  id         :uuid             not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :uuid             not null
#
# Indexes
#
#  index_professors_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
require "test_helper"

class ProfessorTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
