json.extract! task, :id, :published_at, :due_date, :weight, :created_at, :updated_at
json.url task_url(task, format: :json)
