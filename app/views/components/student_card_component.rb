# frozen_string_literal: true

class StudentCardComponent < ApplicationComponent
  attr_reader :student, :room

  def initialize(student, room)
    @student = student
    @room = room
  end

  def view_template
    Card(
      :base_100,
      class: "flex flex-row items-center justify-between mt-4 w-full shadow-md border border-black/10 px-4 py-2",
    ) { |card|
      p { student.user.name + " " + student.room_requests.find{_1.room_id == @room.id}&.identifier }
    }
  end
end
