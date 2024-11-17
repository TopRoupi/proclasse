# == Schema Information
#
# Table name: room_requests
#
#  id         :uuid             not null, primary key
#  accepted   :boolean          default(FALSE), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  room_id    :uuid             not null
#  student_id :uuid             not null
#
# Indexes
#
#  index_room_requests_on_room_id     (room_id)
#  index_room_requests_on_student_id  (student_id)
#
# Foreign Keys
#
#  fk_rails_...  (room_id => rooms.id)
#  fk_rails_...  (student_id => students.id)
#
require "test_helper"

class RoomRequestTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
