# == Schema Information
#
# Table name: rooms
#
#  id           :uuid             not null, primary key
#  code         :string           not null
#  name         :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  professor_id :uuid             not null
#
# Indexes
#
#  index_rooms_on_professor_id  (professor_id)
#
# Foreign Keys
#
#  fk_rails_...  (professor_id => professors.id)
#
require "test_helper"

class RoomTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
